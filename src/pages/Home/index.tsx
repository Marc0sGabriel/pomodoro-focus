export function Home() {
  return (
    <div>
      <form action="">
        <label htmlFor="">Vou focar em</label>
        <input id="task" />

        <label htmlFor="">durante</label>
        <input type="number" id="minutesAmount" />

        <span>minutos.</span>
      </form>
    </div>
  );
}
