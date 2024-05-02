export default function TabButton(props) {
  // function handleClick() {
  //   console.log('Hello');
  // }

  return(
    <li>
      <button className={props.isSelected ? 'active' : undefined} onClick={props.onClick}>{props.children}</button>
    </li>
  );
}
