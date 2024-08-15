use leptos::*;

#[component]
pub fn Row(id:usize,label:String) -> impl IntoView {
    view! {
        <tr>
            <td> {id} </td>
            <td> {label} </td>
        </tr>
    }
}
