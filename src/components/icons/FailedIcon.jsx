export default function FailedIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="15" cy="15" r="15" fill="var(--red)" opacity={0.2}/>
        <path d="M20 20L10 10M20 10L10 20" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  )
}
