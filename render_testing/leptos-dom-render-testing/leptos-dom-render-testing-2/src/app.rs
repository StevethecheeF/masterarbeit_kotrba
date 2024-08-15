use leptos::*;
use super::row;

#[derive(Clone)]
struct ArrayStruct {
    id: usize,
    label: String,
}

#[component]
pub fn App() -> impl IntoView {
    let (number_of_rows, set_number_of_rows) = create_signal(0);
    let (data, set_data) = create_signal(vec![]);

    // function that builds a number of rows and returns them
    let build_rows = move |amount: &usize, current_length: &usize| -> Vec<ArrayStruct> {
        let mut return_array: Vec<ArrayStruct> = vec![];

        for i in 0..(*amount) {
            let tmp_label = format!("label {}",(&i+current_length));
            return_array.push( ArrayStruct
            {
                id: (&i+current_length),
                label: tmp_label,
            }
            );
        }
        return return_array;
    };

    // function that adds a number of rows to the data
    let add_rows = move |amount: usize| {
        let mut tmp_data = data.get();
        let mut  new_rows = build_rows(&amount,&tmp_data.len());
        set_number_of_rows(number_of_rows.get() + amount);
        set_data.update(|value| value.append(&mut new_rows));
    };

    let create_rows = move |amount:usize| {
        let mut new_rows = build_rows(&amount,&0);
        set_data(new_rows);
        set_number_of_rows(amount);
    };
    // creating rows handler
    let create_1000_rows = move |_|{
        let amount = 1000;
        create_rows(amount);
    };
    let create_10000_rows = move |_|{
        let amount = 10000;
        create_rows(amount);
    };

    // adding rows handler
    let add_1000_rows = move |_| {
        let amount = 1000;
        add_rows(amount);
    };
    let add_10000_rows = move |_| {
        let amount = 10000;
        add_rows(amount);
    };

    // remove rows handler

    let remove_rows = move |_| {
        set_data(vec![]);
        set_number_of_rows(0)
    };

    view! {
        <h1>"Framework: Leptos"</h1>
        <button on:click=add_1000_rows>"Add 1000"</button>
        <button on:click=add_10000_rows>"Add 10000"</button>
        <button on:click=create_1000_rows>"Create 1000"</button>
        <button on:click=create_10000_rows>"Create 10000"</button>
        <button on:click=remove_rows>"Remove rows"</button>
        <div>
            <a> {number_of_rows}</a>
        </div>
        <table>
            <tbody>
                <For
                    each=data
                    key=|entry| entry.id.clone()
                    let:child
                >
                    <row::Row id=child.id label=child.label />
                </For>
            </tbody>
        </table>
    }
}