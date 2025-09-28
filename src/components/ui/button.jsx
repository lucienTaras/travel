export function Button({ className = '', variant, size = 'md', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  const sizes = { sm: 'px-3 py-2 text-sm', md: 'px-4 py-2', lg: 'px-5 py-3 text-base' };
  const variants = {
    default: 'bg-[#A85C32] hover:bg-[#8F4E2B] text-white ring-[#A85C32]',
    outline: 'border border-[#A85C32] text-[#A85C32] hover:bg-[rgba(168,92,50,0.08)] ring-[#A85C32]'
  };
  const cls = [base, sizes[size], variants[variant || 'default'], className].join(' ');
  return <button className={cls} {...props}>{children}</button>;
}
