// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use system_shutdown::shutdown;

fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![test])
  .invoke_handler(tauri::generate_handler![shut_down])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn shut_down() {
  match shutdown() {
    Ok(_) => println!("Shutting down, bye!"),
    Err(error) => println!("Failed to shut down: {}", error)
  }
}

#[tauri::command]
fn test() {
  println!("Hola")
}
