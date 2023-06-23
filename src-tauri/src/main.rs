// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use system_shutdown::{sleep, shutdown};

fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![test, shut_down, to_sleep])
/*   .invoke_handler(tauri::generate_handler![shut_down])
  .invoke_handler(tauri::generate_handler![to_sleep]) */
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

#[tauri::command]
fn to_sleep() {
  match sleep() {
    Ok(_) => println!("Going to sleep!"),
    Err(error) => println!("Failed sleeping: {}", error)
  }
}
