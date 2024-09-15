use leptos::*;
use super::row::Row;
use super::menu::Menu;

#[component]
pub fn App() -> impl IntoView {
	let (number_of_rows, set_number_of_rows) = create_signal(0_usize);
	let (data, set_data) = create_signal(vec![]);

	view! {
        <Menu
			number_of_rows=number_of_rows
			set_number_of_rows=set_number_of_rows
			set_data=set_data
		/>
        <table>
            <tbody>
                <For
                    each=data
                    key=|entry| (entry.id,entry.label.clone())
                    let:child
                >
                    <Row key=child.id label=child.label />
                </For>
            </tbody>
        </table>
    }
}
