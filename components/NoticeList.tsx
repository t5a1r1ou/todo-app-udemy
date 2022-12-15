import { FC } from 'react';
import { useQueryNotices } from '../hooks/useQueryNotices';
import { NoticeItem } from './NoticeItem';
import { Spinner } from './Spinner';

export const NoticeList: FC = () => {
  const { data: notices, status } = useQueryNotices();
  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <p>{'Error'}</p>;
  console.log(notices);

  return (
    <ul className="my-2">
      {notices?.map((notice) => (
        <NoticeItem
          key={notice.id}
          id={notice.id}
          content={notice.content}
          user_id={notice.user_id}
        />
      ))}
    </ul>
  );
};
