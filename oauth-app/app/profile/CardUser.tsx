import Image from 'next/image';
import { DefaultSession } from 'next-auth';
import { useRouter } from 'next/navigation';

export default ({ user }: { user: DefaultSession['user'] }) => {
  const navigate = useRouter();

  if (!user) {
    navigate.push('/');
  }
  return (
    <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
      <>
        <div className="mt-6 w-fit mx-auto">
          <Image
            src={String(user?.image || '/versel.svg')}
            className="rounded-full w-28 "
            width={122}
            height={112}
            alt="profile picture"
          />
        </div>

        <div className="mt-8 ">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {user?.name}
          </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5">{user?.email}</p>
      </>
    </section>
  );
};
