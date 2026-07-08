import Image from 'next/image';
import { ProfileSidebarNav } from './profile-sidebar-nav';

interface ProfileSidebarProps {
  userName: string;
  avatarSrc: string;
}

/**
 * Sticky account sidebar: greeting/avatar block + `ProfileSidebarNav`.
 *
 * Shared by every `/profile*` route via `app/(main)/profile/layout.tsx`
 * — same "sidebar exclusive to one route family" pattern established
 * by `BlogSidebar` for `/blog/*`.
 *
 * Server Component — only the active-link highlighting below needs
 * client-side routing info, which is isolated into `ProfileSidebarNav`.
 */
export function ProfileSidebar({ userName, avatarSrc }: ProfileSidebarProps) {
  return (
    <aside className="lg:col-span-3 md:col-span-4 md:sticky md:top-24">
      <div className="flex items-center gap-5 mb-5">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={avatarSrc}
              alt={userName}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start space-y-1">
            <span className="text-xs text-muted">خوش آمدید</span>
            <span className="line-clamp-1 font-semibold text-sm text-foreground cursor-default">
              {userName}
            </span>
          </div>
        </div>
      </div>

      <ProfileSidebarNav />
    </aside>
  );
}
