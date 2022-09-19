export default function Avatar({person}) {
  return (
    <div className={"app-avatar"} style={{"background": `linear-gradient(${person.angle}deg, var(--${person.color1}), var(--${person.color2}))`}}>
      <span style={{"background": `linear-gradient(${person.angle}deg, var(--${person.color1}), var(--${person.color2}))`, webkitBackgroundClip: "text"}}>
        {person.name.split(" ")[0][0]}{person.name.split(" ")[1][0]}
      </span>
    </div>
  )
}
