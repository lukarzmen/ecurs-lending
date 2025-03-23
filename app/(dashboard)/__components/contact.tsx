'use client';

export default function ContactButton() {
  return (
    <a
      href="mailto:medyk.lukasz94@gmail.com?subject=Ecurs&body=Chcę%20dowiedzieć%20więcej%20o%20platformie."
      className="bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center"
    >
      Napisz do nas
    </a>
  );
}