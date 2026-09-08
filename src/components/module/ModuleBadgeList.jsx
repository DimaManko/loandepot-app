/**
 * Список тегов модуля (ModuleBadgeList).
 *
 * По карте architecture.md принимает `tags` (массив строк) — в будущем
 * будет приходить из API. Пока, до расширения модели данных, используется
 * статичный набор тегов по умолчанию.
 */
export function ModuleBadgeList({
  tags = ["Branding", "Marketing", "Personal"],
}) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {tags.map((tag) => (
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
