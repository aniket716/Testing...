import Image from "next/image";
import { BackgroundBeams} from "../components/ui/background-beams";
import { TracingBeam } from "../components/ui/tracing-beam";

export default function Home() {
  return (
   <>
  <BackgroundBeams></BackgroundBeams><br></br>
  {/* <TracingBeam children={undefined}></TracingBeam> */}
   </>
  );
}
