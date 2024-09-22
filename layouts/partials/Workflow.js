import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const Workflow = ({ workflow }) => {
  return (
    <section className="section bg-theme-light">
<div className="mb-8 text-center">
  {markdownify(
    workflow.title,
    "h2",
    "mx-auto max-w-[400px] font-bold leading-[44px]"
  )}

<div style={{marginTop: "30px"}} >
{markdownify(workflow.description, "h8", "mt-6 font-semibold italic")}
</div>
</div>
    </section>
  );
};

export default Workflow;
