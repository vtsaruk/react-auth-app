const http = require('http');
const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_PRIVATE_KEY = "shhhhh";
const REFRESH_TOKEN_PRIVATE_KEY = "shhhhs";

const ROUTES = new Set ([
    'POST/api/auth/login',
    'POST/api/auth/google-login',
    'POST/api/auth/microsoft-login',
    'POST/api/auth/logout',
    'GET/api/auth'
]);

let userMapper = {};

function createTokens (data) {
    const refreshToken = jwt.sign(
        data,
        REFRESH_TOKEN_PRIVATE_KEY,
        {'algorithm':'HS256', expiresIn: "30d"}
      );

      const token = jwt.sign(
          data,
          ACCESS_TOKEN_PRIVATE_KEY,
          {'algorithm':'HS256',  expiresIn: "14m"}
      );
      return { refreshToken, token }
}

function addUserToBD ({ refreshToken, token }) {
    userMapper[refreshToken.slice(0, 10)] = {
        token,
        refreshToken,
    }
}

http.createServer((request, response) => {
    const { method, url, headers} = request;
    const bodyChunks = [];
    console.log(`${method}${url}`);

    if (!ROUTES.has(`${method}${url}`)) {
        response.statusCode = 404;
        response.write(JSON.stringify({status: 404, message: 'Not found'}));
        response.end();
        return;
    }

    request.on('data', (data) => {
        bodyChunks.push(data);
    });

    request.on('end', () => {
        let data = {};
        if (request.method === "GET") {
        } else {
            data = JSON.parse(Buffer.concat(bodyChunks).toString('utf8'));
        }

        const { authorization = '', refreshauthorization = '' } = headers;

        if (method === 'POST' && url === '/api/auth/login') {
            const { email } = data.request || {};
            const { refreshToken, token } = createTokens({ displayName: email });
            addUserToBD({ token, refreshToken });

            response.statusCode = 200;
            response.write(JSON.stringify({ status: 200, message: 'Ok', data: { 
                authorization: token,
                refreshAuthorization: refreshToken,
            } }));         
        }

        if (method === 'POST' && url === '/api/auth/google-login') {
            const { displayName } = data.request || {};
            const { refreshToken, token } = createTokens({ displayName });
            addUserToBD({ token, refreshToken });

            response.statusCode = 200;
            response.write(JSON.stringify({status: 200, message: 'Ok', data: { 
                authorization: token,
                refreshAuthorization: refreshToken,
            }}));
        }

        if (method === 'POST' && url === '/api/auth/microsoft-login') {
            const { displayName } = data.request || {};
            const { refreshToken, token } = createTokens({ displayName });
            addUserToBD({ token, refreshToken });

            response.statusCode = 200;
            response.write(JSON.stringify({status: 200, message: 'Ok', data: { 
                authorization: token,
                refreshAuthorization: refreshToken,
            }}));
        }

        if (method === 'GET' && url === '/api/auth') {
            let user = {};
            if (!userMapper[refreshauthorization.slice(0, 10)]) {
                response.statusCode = 401;
                response.write(JSON.stringify({ status: 401, message: 'Not authorized' }));
                response.end();
                return;
            }

            jwt.verify(authorization, ACCESS_TOKEN_PRIVATE_KEY, {'algorithm':'HS256'}, (err, decoded) => {
                if (err) {
                    console.log('err', err);
                    return;
                }
                user = decoded;
            });

            jwt.verify(refreshauthorization, REFRESH_TOKEN_PRIVATE_KEY, {'algorithm':'HS256'}, (err, decoded) => {
                console.log('decoded', decoded)
                if (err) {
                    console.log('err', err);
                    return;
                }
                user = decoded;
            });

            response.statusCode = 200;
            response.write(
                JSON.stringify(
                    { status: 200, message: 'Ok', data: { refreshauthorization, authorization, ...user } }
                )
            );
        }

        if (method === 'POST' && url === '/api/auth/logout') {
            delete userMapper[`${method}${url}`];
            response.write(
                JSON.stringify(
                    { status: 200, message: 'Ok', data: {} }
                )
            );
        }

        response.end();
    })
}).listen(3030, ( ) => {
    console.log('Server is running at port 3030')
});


