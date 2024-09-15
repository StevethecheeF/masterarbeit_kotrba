use leptos::*;
mod app;
mod row;
mod menu;

use app::App;

fn main() {
    mount_to_body(|| view! { <App/> })
}
