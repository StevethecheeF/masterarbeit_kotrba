use leptos::*;

#[derive(Clone)]
pub struct ArrayStruct {
	pub id: usize,
	pub label: String,
}
#[component]
pub fn Menu(
	number_of_rows:ReadSignal<usize>,
	set_number_of_rows:WriteSignal<usize>,
	set_data: WriteSignal<Vec<ArrayStruct>>
) -> impl IntoView {
	let build_rows = |amount: usize, current_length: usize| -> Vec<ArrayStruct> {
		let mut return_array = Vec::with_capacity(amount); // Pre-allocate space

		for i in 0..(amount) {
			let length = i+current_length.clone();
			let tmp_label = format!("label {}",length);
			return_array.push(ArrayStruct {
				id: length,
				label: tmp_label,
			});
		}
		return_array
	};

	let add_rows = move |amount: usize| {
		let mut new_rows = build_rows(amount.clone(), number_of_rows.get());
		set_number_of_rows.update(|number_of_rows| *number_of_rows += amount);
		set_data.update(|value| value.append(&mut new_rows));
	};

	let create_rows = move |amount: usize| {
		set_data(build_rows(amount.clone(), 0));
		set_number_of_rows(amount);
	};

	let update_rows = move |_| {
		set_data.update(|data| data.iter_mut().for_each(|item| item.label = "changed".to_string()));
	};

	let remove_rows = move |_| {
		set_data(vec![]);
		set_number_of_rows(0)
	};

	// creating rows handler
	let create_1000_rows = move |_| create_rows(1000);
	let create_10000_rows = move |_| create_rows(10000);
	let add_1000_rows = move |_| add_rows(1000);
	let add_10000_rows = move |_| add_rows(10000);

	view!{
		<div>
			<div>
				<h1>Framework: Leptos</h1>
			</div>
			<div>
				<p>total number of rows: {number_of_rows} </p>
			</div>
			<div>
				<button id="create-1000" on:click=create_1000_rows>
					create 1000
				</button>
				<button id="add-1000" on:click=add_1000_rows>
					add 1000
				</button>
				<button id="create-10000" on:click=create_10000_rows>
					create 10000
				</button>
				<button id="add-10000" on:click=add_10000_rows>
					add 10000
				</button>
				<button id="remove" on:click=update_rows>
					update all
				</button>
				<button id="remove" on:click=remove_rows>
					remove all
				</button>
			</div>
		</div>
	}
}
