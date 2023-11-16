'use client';

import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

type User = { name: string; id: string };

const users: User[] = [
  { name: 'Jatin', id: '1' },
  { name: 'Vikram', id: '2' },
  { name: 'Maanav', id: '3' },
  { name: 'Aryan', id: '4' },
];

const SortableUser = ({ user }: { user: User }) => {
  const { listeners, attributes, transform, transition, setNodeRef } =
    useSortable({ id: user.id });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ transition, transform: CSS.Transform.toString(transform) }}
    >
      {user.name}
    </div>
  );
};

const Page = () => {
  const [data, setData] = useState(users);
  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (active.id === over?.id) {
      return;
    }

    setData((prev) => {
      const oldIndex = prev.findIndex((user) => user.id === active.id);
      const newIndex = prev.findIndex((user) => user.id === over?.id);

      return arrayMove(data, oldIndex, newIndex);
    });
  };
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext strategy={verticalListSortingStrategy} items={data}>
        {data.map((user) => (
          <SortableUser user={user} key={user.id} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default Page;
