import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateTitle } from '../../../store/slices/projectSlice';

export const TitleEditor: React.FC = () => {
  const dispatch = useDispatch();
  const currentTitle = useSelector((state: RootState) => state.project.title);
  const [isEditing, setIsEditing] = useState(false);
  const [titleInput, setTitleInput] = useState(currentTitle);

  const handleSave = () => {
    if (titleInput.trim()) {
      dispatch(updateTitle(titleInput));
    }
    setIsEditing(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {isEditing ? (
        <input
          type="text"
          value={titleInput}
          autoFocus
          onChange={(e) => setTitleInput(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          style={{
            backgroundColor: '#161629',
            border: '1px solid #FF5A5F',
            color: '#FFFFFF',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 600,
          }}
        />
      ) : (
        <span
          onClick={() => setIsEditing(true)}
          style={{
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '4px',
          }}
          title="Klik untuk mengubah judul"
        >
          {currentTitle} ✏️
        </span>
      )}
    </div>
  );
};

export default TitleEditor;
