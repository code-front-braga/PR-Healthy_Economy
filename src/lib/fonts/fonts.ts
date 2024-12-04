import {
	Love_Ya_Like_A_Sister,
	Loved_by_the_King,
	Alumni_Sans,
} from 'next/font/google';

const loveYLSister = Love_Ya_Like_A_Sister({
	subsets: ['latin'],
	weight: ['400'],
});

const lovedBKing = Loved_by_the_King({ subsets: ['latin'], weight: ['400'] });

const alumni = Alumni_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export { loveYLSister, lovedBKing, alumni };
