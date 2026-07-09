'use client';

export default function MobilePhoneIcon() {
  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(249, 115, 22, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .phone-icon-pulse {
          animation: pulse-ring 2s infinite;
        }

        .phone-icon-float {
          animation: float 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .phone-icon-mobile {
            display: flex;
          }
        }

        @media (min-width: 769px) {
          .phone-icon-mobile {
            display: none;
          }
        }
      `}</style>

      <div className="phone-icon-mobile fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            window.location.href = 'tel:0508202419';
          }}
          className="phone-icon-float phone-icon-pulse relative w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
          aria-label="전화 문의"
          title="0508-202-4719"
        >
          {/* Phone icon SVG */}
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.346.82.876 1.885 1.833 2.841.957.956 2.022 1.487 2.84 1.833l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.47c-5.473 0-10.026-4.554-10.026-10.026V3z" />
          </svg>

          {/* Pulse ring effect */}
          <div className="absolute inset-0 rounded-full border-4 border-orange-500 animate-pulse opacity-30" />
        </button>
      </div>
    </>
  );
}
