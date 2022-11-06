import { render } from "solid-js/web";
import { createSignal, onMount, Show } from "solid-js";


function QaSwitcher(props) {
		//const [card, setCard] = createSignal([]);
 		onMount(async ()=>{
	console.log(props.card)
})
	const [clicked, setClick] = createSignal(false);
	const toggle = () => setClick(!clicked())
		return (
	<Show
		when={clicked()}
		fallback={<li onClick={toggle}>Q: {props.in["q"]}</li>}>
		<li onClick={toggle}>A: {props.in["a"]}</li>
</Show>
)
  ;
}

export default QaSwitcher;
