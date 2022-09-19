export default function Avatar({person, size, animated}) {
  const background = {"background": `linear-gradient(${person.angle}deg, var(--${person.color1}), var(--${person.color2}))`}

  return (
    <div className={`app-avatar`} style={{width: size, height: size, ...background}}>
      {animated &&
        <span className={`app-avatar__animation`} style={background}></span>
      }
      <span className={`app-avatar__initials a`}  style={{fontSize: `calc(${size} / 2.4)`}}>
        {person.name.split(" ")[0][0]}{person.name.split(" ")[1][0]}
      </span>
      <span className={`app-avatar__initials b`}  style={{fontSize: `calc(${size} / 2.4)`}}>
        {person.name.split(" ")[0][0]}{person.name.split(" ")[1][0]}
      </span>
    </div>
  )
}
