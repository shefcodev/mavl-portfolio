'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import Card from './ui/Card';
import Button from './ui/UIButton';

// ✅ Add this type if not imported
type RecognitionProps = {
  id: string;
  title: string;
  description: string;
  src: string;
  url: string;
};

const Recognition = ({
  recognition: { id, title, description, src, url },
}: {
  recognition: RecognitionProps;
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <Card className='w-4/5 h-fit border border-white rounded-xl p-4 lg:p-6'>
      <div className='project-wrapper'>
        <div className='project-detail_wrapper'>
          <div className='flex-between px-3'>
            <h3 className='project-h3'>{title}</h3>

            <Button onClick={toggleDescription}>
              {showDescription ? (
                <IoMdArrowDropup className='text-white size-5' />
              ) : (
                <IoMdArrowDropdown className='text-white size-5' />
              )}
            </Button>
          </div>

          {showDescription && (
            <div className='px-3'>
              <p className='project-p'>{description}</p>
            </div>
          )}
        </div>

        <div className='w-full flex flex-col gap-4'>
          <Link href={url}>
            <Image
              src={src}
              alt={title}
              width={500}
              height={150}
              className='w-full lg:w-full rounded-xl'
            />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Recognition;
