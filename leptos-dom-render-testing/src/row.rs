use leptos::*;


#[component]
pub fn Row(key:usize,label:String) -> impl IntoView {
	view!{
		<tr>
			<td> {key}</td>
			<td> {label}</td>
		</tr>
	}
}
