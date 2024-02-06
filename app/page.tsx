import { Words } from "@/components/words";

const value = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ipsum cumque! In laboriosam tenetur architecto perferendis neque ipsam assumenda cum esse expedita nesciunt, dolores exercitationem numquam! Itaque enim excepturi quia.`;

export default function Home() {
  return (
    <main>
      <div className="h-dvh" />
      <Words value={value} />
      <div className="h-dvh" />
    </main>
  );
}
