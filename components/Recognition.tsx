import { useState } from 'react';
import Image from 'next/image';
import Card from './ui/Card';
import Button from './ui/UIButton';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

// ✅ Type for the item
export interface RecognitionItemProps {
  title: string;
  quote: string;
  source: string;
  image: string;
}

// ✅ Accept item with proper typing in props
const Recognition = ({ item }: { item: RecognitionItemProps }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <Card className='w-4/5 h-fit border border-white rounded-xl p-4 lg:p-6'>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h3 className='project-h3'>{item.title}</h3>
          <Button onClick={() => setShowFull((prev) => !prev)}>
            {showFull ? (
              <IoMdArrowDropup className='text-white size-5' />
            ) : (
              <IoMdArrowDropdown className='text-white size-5' />
            )}
          </Button>
        </div>

        {showFull && (
          <p className='text-sm text-white leading-relaxed italic'>
            “{item.quote}”
          </p>
        )}

        <p className='text-xs text-gray-400'>— {item.source}</p>

        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={150}
          className='w-full rounded-xl'
        />
      </div>
    </Card>
  );
};

export default Recognition;
