'use client';

import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Recognition from '@/components/Recognition';
import { recognitions } from '@/constants';
import { motionValues } from '@/lib/utils';

const Recognitions = () => {
  const { title, description, recognitions: recognitions_ } = recognitions;

  return (
    <section id='recognitions' className='section section_px section-gap'>
      <main className='flex flex-col gap-8 lg:gap-8'>
        <div className='flex-center flex-col gap-8'>
          <motion.h2 className='section-h2' {...motionValues}>
            {title}
          </motion.h2>

          <motion.h3 className='section-h3' {...motionValues}>
            {description}
          </motion.h3>
        </div>

        <motion.div {...motionValues}>
          <Carousel className='w-full' orientation='horizontal'>
            <CarouselContent>
              {recognitions_.map((recognition: RecognitionProp, index: number) => (
  <CarouselItem key={index} className='flex-center'>
    <Recognition recognition={recognition} />
  </CarouselItem>
))}
            </CarouselContent>
            <CarouselPrevious className='carousel-left_button' />
            <CarouselNext className='carousel-right_button' />
          </Carousel>
        </motion.div>
      </main>
    </section>
  );
};

export default Recognitions;
