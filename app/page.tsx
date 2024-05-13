import Chance from 'chance';
const chance = new Chance();

function TopBar() {
  return (
    <>
      <div className="fixed top-0 w-screen bg-gradient-to-b from-black to-transparent flex flex-row p-10">
        <p className=" text-4xl font-bold">Gallery</p>
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className=' w-16 rounded-full absolute right-5 top-5 hover:border-8 cursor-pointer border-white/20 z-50 shadow-lg hover:scale-110 transition-all ease-out active:scale-90' alt="avatar" />
      </div>
    </>
  );
}
function Images() {
  // @ts-ignore
  const imageIDS = [...Array(250).keys()]
  const imageSeeds = imageIDS.map(() => `https://picsum.photos/seed/${chance.first()}/500/300`)
  return (
    <>
    <div className=" griddy">
      {imageSeeds.map((e) => <Image e={e}/>)}
    </div>
    </>
  )
}

function Image(props: { e: string; }) {
  const re = new RegExp("^https://picsum.photos/seed/(.+)/500/300$");
  return (<div className="inline-block px-3 pb-16 pt-5 hover:bg-base m-1 rounded-lg duration-100 group w-56">
  <img src={props.e.toString()} alt={'an epic picture :)'} className=" w-56  aspect-square object-cover rounded-lg group-hover:shadow-lg phone:w-screen " draggable={false} />
  <p className=" opacity-0 group-hover:opacity-100 transition-all font-semibold text-center pt-3 pb-[-0.75rem]">{re.exec(props.e)![1]}</p>
  <p className='opacity-0 group-hover:opacity-100 transition-all text-white/70 text-center pt-3 pb-[-0.75rem]'>{chance.date({string: true, american: false}).toString()}</p>
  </div>);
}

export default function Home() {
  return <>
    <TopBar/>
    <div className=" mt-20">
    <Images/>
    </div>
  </>
}
