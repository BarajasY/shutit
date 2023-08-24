# ShutIt
A Tauri/Rust and Next.js/TypeScript desktop application that allows users to shut down, restart or sleep their computers after a specified time.
# About
The application itself is very simple, it uses the rust crate system_shutdown to access the main 3 functions (shut, restart, sleep) coupled with a cute interface made with next.js.
Tauri allows nextjs to communicate with the rust code via invoke() function.
Furthermore the application displays a simple clock with the time the user has specified.
# Compatibilty
I've only tested this application in Windows 11, will dig about VM to test it in different OS.
