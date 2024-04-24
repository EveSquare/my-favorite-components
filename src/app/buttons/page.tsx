import Card from "@/components/Card";
import Introduction from "@/components/Introduction";

export default function Buttons() {
  return (
    <>
      <Introduction
        title="Buttons"
        description="A collection of my favorite buttons."
      />
      <Card>
        <button className="bg-transparent text-neutral-800 hover:bg-neutral-200 font-bold py-1 px-4 rounded transition-colors">
          Button
        </button>
      </Card>
    </>
  );
}
