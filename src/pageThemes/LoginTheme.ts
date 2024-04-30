import { createTheme } from '@mui/material';

const loginTheme = createTheme({
    palette: {
        primary: {
          main: '#ec407a',
        },
      },
    typography: {
        h3: {
            fontSize: '20px',
            textAlign: 'center',
            margin: '20px',
        },
        fontFamily: 'Raleway, Arial',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiGrid: {
            styleOverrides: {
                container: {
                    background: '#eef5f9',
                    minHeight: '100dvh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 20px',
                },
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    width: '400px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: 'max-content',
                    padding: '30px',
                }
            }
        },
        MuiFormControl:{
            styleOverrides: {
                root: {
                    display: 'block',
                    marginBottom: '20px',
                    width: '100%',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    width: '100%',
                },
                input: {
                    padding: '8px !important',
                    background: 'white',
                }
                
            }
        },
        MuiButtonBase: {
            styleOverrides: {
              root: {
                margin: "4px auto",
                width: '100%'
              }
            }
        },

    }
})

export default loginTheme;
