/**
 * Список тегов модуля (ModuleBadgeList).
 *
 * По карте architecture.md принимает `tags` (массив строк)
 */
export function ModuleBadgeList({ moduleTags }) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {moduleTags.map((tag) => (
        <span
          key={tag}
          className="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-brand-purple/10 text-brand-purple"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default ModuleBadgeList;
