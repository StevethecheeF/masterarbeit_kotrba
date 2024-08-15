use leptos::*;
mod app;
mod row;
mod menu;


fn main() {
    mount_to_body(|| view! { <app::App/> })
}
