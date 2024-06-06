'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Searchbar = () => {
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;

        if (name) {
            router.push(`/list?name=${name}`)
        }
    }

    return (
        <form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-lg flex-1' onSubmit={handleSearch}>
            <input type="text" placeholder='Search' name='name' className='flex-1 bg-transparent outline-none' />
            <button type='submit' className='cursor-pointer'>
                <Image src='/search.png' alt='search icon' width={16} height={16} />
            </button>
        </form>
    )
}

export default Searchbar
