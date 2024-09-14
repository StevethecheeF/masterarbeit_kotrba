use leptos::*;
mod app;
mod row;


fn main() {
    mount_to_body(|| view! { <app::App/> })
}
