import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <>
      <h1>Hello My name is Saeyeon!</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
	src="/pg.jpg"
	width={480}
	height={360}
	/>
      <h3> Deparature of Information System</h3>
      
      <Image
	src="/logo.png"
	width={300}
	height={300}
	/>
    </>
  );
}