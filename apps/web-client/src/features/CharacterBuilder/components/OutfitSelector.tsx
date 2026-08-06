import React from 'react';

interface OutfitSelectorProps {
  onSelectOutfit: (category: string, item: string) => void;
}

export const OutfitSelector: React.FC<OutfitSelectorProps> = ({ onSelectOutfit }) => {
  const outfits = [
    { id: 'casual', name: 'Casual Hoodie & Jeans' },
    { id: 'formal', name: 'Formal Suit & Tie' },
    { id: 'business', name: 'Business Casual Shirt' },
    { id: 'sporty', name: 'Sport Tracksuit' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#FFF' }}>
      <h4 style={{ margin: 0, fontSize: '14px', color: '#FF5A5F' }}>Pilihan Pakaian & Aksesoris</h4>

      <div>
        <label style={{ fontSize: '12px', color: '#A0A0B0', display: 'block', marginBottom: '8px' }}>Gaya Pakaian</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {outfits.map((outfit) => (
            <div
              key={outfit.id}
              onClick={() => onSelectOutfit('outfit', outfit.id)}
              style={{
                backgroundColor: '#1F1F38',
                border: '1px solid #2E2E48',
                borderRadius: '6px',
                padding: '10px 12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: 600 }}>{outfit.name}</span>
              <span style={{ fontSize: '11px', color: '#FF5A5F' }}>Pilih</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutfitSelector;
