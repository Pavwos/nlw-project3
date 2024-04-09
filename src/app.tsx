import { Header } from "./components/header"
import { Attendee } from "./components/attendee-list"

export function app() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header/>
      <Attendee/>
    </div>
  )
}

export default app
