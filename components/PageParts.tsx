// 도시 하위 페이지에서 공유하는 서버 프레젠테이션 컴포넌트

export const SITE = 'https://gandago-massage.com';

export type Crumb = { name: string; href?: string };

export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      {crumbs.map((c, i) => (
        <span key={i}>
          {c.href ? (
            <a href={c.href} className="hover:text-orange-600">
              {c.name}
            </a>
          ) : (
            <span>{c.name}</span>
          )}
          {i < crumbs.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
}

export function SchemaScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${SITE}${c.href}` } : {}),
    })),
  };
}

export function Hero({
  crumbs,
  title,
  desc,
}: {
  crumbs: Crumb[];
  title: string;
  desc: string;
}) {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb crumbs={crumbs} />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">{desc}</p>
        <a
          href="tel:0508-202-4719"
          className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition"
        >
          전화예약 0508-202-4719
        </a>
      </div>
    </section>
  );
}

export type LinkCard = { href: string; label: string; desc?: string };

export function LinkGrid({
  title,
  cards,
  cols = 3,
  tone = 'white',
}: {
  title?: string;
  cards: LinkCard[];
  cols?: 2 | 3 | 4 | 5;
  tone?: 'white' | 'orange' | 'gray';
}) {
  const colClass: Record<number, string> = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'sm:grid-cols-2 md:grid-cols-4',
    5: 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  };
  const cardTone =
    tone === 'orange'
      ? 'bg-orange-50 border-orange-200'
      : tone === 'gray'
        ? 'bg-gray-50 border-gray-200'
        : 'bg-white border-gray-200';
  return (
    <div>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
      )}
      <div className={`grid grid-cols-2 ${colClass[cols]} gap-3`}>
        {cards.map((c) => (
          <a
            key={c.href + c.label}
            href={c.href}
            className={`block p-4 border rounded-lg hover:shadow-md hover:border-orange-300 transition ${cardTone}`}
          >
            <span className="font-semibold text-gray-900">{c.label}</span>
            {c.desc && (
              <span className="block text-sm text-gray-600 mt-1">{c.desc}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Section({
  children,
  tone = 'white',
}: {
  children: React.ReactNode;
  tone?: 'white' | 'gray';
}) {
  return (
    <section className={`py-14 px-4 ${tone === 'gray' ? 'bg-gray-50' : ''}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
