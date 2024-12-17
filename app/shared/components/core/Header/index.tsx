import { Icon } from '@iconify/react';
import { Divider, Skeleton, Tooltip } from '@nextui-org/react';
import { useNavigate, useLocation } from '@remix-run/react';
import { useCallback, useEffect, useState } from 'react';

import { useHeaderNavigation } from '@/hooks/useHeaderNavigation';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useWindowControls } from '@/hooks/useWindowControls';
import { useUpdateDownload } from '@/hooks/useUpdateDownload';

import { useModal } from '@context/ModalContext';
import useSearchStore from '@stores/search';
import usePlayerStore from '@stores/player';

import ClosedBetaModal from '@components/modals/ClosedBeta';
import NewBadge from '@components/decoration/NewBadge';
import SearchInput from '@components/core/SearchInput';

const isPlayerRoute = (path: string) => path.includes('/player');
import { version as appVersion } from '../../../../../package.json';
import { debounce } from '@/shared/lib/utils';

const Header = () => {
  const { searchTerm, setSearchTerm } = useSearchStore();
  const { isMouseMoving } = usePlayerStore();
  const navigate = useNavigate();
  const location = useLocation();

  const { isMaximized, handleWindowControl } = useWindowControls();
  const {
    canGoBack,
    canGoForward,
    canGoHome,
    isHome,
    handleBack,
    handleForward,
    handleHome,
    currentPath,
  } = useHeaderNavigation();
  const { headerTitle } = useHeaderTitle();
  const { updateDownloaded, handleUpdateClick } = useUpdateDownload();
  const { openModal } = useModal();

  // Efficient debounced search handler
  const debouncedNavigateOnSearch = useCallback(
    debounce(() => {
      if (currentPath !== '/popular-anime') {
        navigate('/popular-anime', { viewTransition: true });
      }
    }, 500),
    [currentPath]
  );

  const handleSearchChange = (term) => {
    debouncedNavigateOnSearch();
    setSearchTerm(term);
  };

  useEffect(() => {
    const currentPath = location.pathname;

    const handleSearchTermChanged = (term) => {
      if (term && currentPath !== '/popular-anime') {
        navigate('/popular-anime', { viewTransition: true });
      }
    };

    handleSearchTermChanged(searchTerm)
  }, [location, searchTerm]);

  const handleClosedBeta = () => {
    openModal('closed-beta', ({ onClose }) => (
      <ClosedBetaModal onClose={onClose} />
    ));
  };

  const appIsActivated = true;
  const appUserDiscordId = '1234567890';
  const appIsBlocked = false;
  const isLoadingUserData = false;
  const userData = {
    discord: {
      avatarURL: 'https://placehold.co/400x400.png',
      username: 'John Doe',
    },
    user: {
      coins: 100,
    },
  };

  return (
    <div
      className="header webkit-app-region-drag"
      style={{
        opacity: isMouseMoving ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        zIndex: 9999,
      }}
    >
      <div className="fixed w-full bg-zinc-950 overflow-hidden flex top-0 left-0 right-0 py-2 px-8 h-14">
        <div
          className="flex flex-row w-full h-full items-center"
          style={{ zIndex: 9000 }}
        >
          <div className="flex flex-row items-center gap-2 flex-1">
            {/* Navigate Buttons */}
            <div className="flex flex-row items-center webkit-app-region-no-drag">
              <button
                onClick={handleHome}
                disabled={isHome}
                className={`focus:outline-none p-1 hover:bg-zinc-800 rounded`}
                style={{ zIndex: 9999 }}
              >
                <Icon
                  icon="gravity-ui:house"
                  width="28"
                  height="28"
                  className={`pointer-events-none ${
                    canGoHome ? 'text-white' : 'text-gray-500'
                  }`}
                />
              </button>
              <button
                onClick={handleBack}
                disabled={!canGoBack}
                className={`focus:outline-none p-1 hover:bg-zinc-800 rounded ${
                  canGoBack ? 'cursor-pointer' : 'cursor-default'
                }`}
                style={{ zIndex: 9999 }}
              >
                <Icon
                  icon="gravity-ui:chevron-left"
                  width="28"
                  height="28"
                  className={`pointer-events-none ${
                    canGoBack ? 'text-white' : 'text-gray-500'
                  }`}
                />
              </button>
              <button
                onClick={handleForward}
                disabled={!canGoForward}
                className={`focus:outline-none p-1 hover:bg-zinc-800 rounded ${
                  canGoForward ? 'cursor-pointer' : 'cursor-default'
                }`}
                style={{ zIndex: 9999 }}
              >
                <Icon
                  icon="gravity-ui:chevron-right"
                  width="28"
                  height="28"
                  className={`pointer-events-none ${
                    canGoForward ? 'text-white' : 'text-gray-500'
                  }`}
                />
              </button>
            </div>

            <Divider orientation="vertical" className="bg-zinc-800 h-6 mr-1" />

            {/* Search Input */}
            {!isPlayerRoute(currentPath) && appIsActivated && !appIsBlocked && (
              <SearchInput searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
            )}
          </div>

          {/* Center Content: Navigation Links + Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
            {/* Left Link */}

            <NewBadge>
              <button
                className="text-white focus:outline-none p-1 hover:bg-zinc-800 rounded text-sm font-semibold flex items-center gap-2 webkit-app-region-no-drag"
                onClick={() =>
                  navigate('/popular-anime', { viewTransition: true })
                }
              >
                <Icon
                  icon="gravity-ui:star"
                  width="20"
                  height="20"
                  className="pointer-events-none text-zinc-500"
                />
                Animes Populares
              </button>
            </NewBadge>

            <Divider orientation="vertical" className="bg-zinc-800 h-6 mr-1" />

            {/* Animeton Logo */}
            <div
              className="flex flex-col items-center webkit-app-region-no-drag"
              style={{ zIndex: 9999 }}
            >
              <p
                onClick={handleHome}
                className="text-white font-bold font-exo text-2xl leading-none"
                style={{ cursor: canGoHome ? 'pointer' : 'default' }}
              >
                ANIMETON
              </p>
              <div className="flex items-center gap-1 text-xs">
                <span
                  onClick={
                    isPlayerRoute(currentPath) ? handleHome : handleClosedBeta
                  }
                  className="text-zinc-400 mt-1 leading-none"
                  style={{ cursor: 'pointer' }}
                >
                  {headerTitle}
                </span>
                <span className="text-zinc-500 mt-1 cursor-pointer">
                  {' - '}
                </span>
                <span
                  onClick={
                    isPlayerRoute(currentPath) ? handleHome : handleClosedBeta
                  }
                  className="text-zinc-400 mt-1 cursor-pointer"
                >
                  v{appVersion}
                </span>
              </div>
            </div>

            <Divider orientation="vertical" className="bg-zinc-800 h-6 mr-1" />

            {/* Right Link */}
            <NewBadge>
              <button
                className="text-white focus:outline-none p-1 hover:bg-zinc-800 rounded text-sm font-semibold flex items-center gap-2 webkit-app-region-no-drag"
                onClick={() =>
                  navigate('/latest-episodes', { viewTransition: true })
                }
              >
                <Icon
                  icon="majesticons:megaphone-line"
                  width="20"
                  height="20"
                  className="pointer-events-none text-zinc-500"
                />
                Últimos Episodios
              </button>
            </NewBadge>
          </div>

          {/* Window Controls and Discord User */}
          <div className="flex flex-row items-center gap-4 justify-end">
            {/* Discord User */}
            {appIsActivated && appUserDiscordId && !appIsBlocked && (
              <div className="flex items-center gap-3 bg-zinc-900/50 rounded-full px-3 py-1.5 webkit-app-region-no-drag">
                {isLoadingUserData ? (
                  <Skeleton className="w-24" />
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <img
                        src={userData?.discord?.avatarURL}
                        alt={userData?.discord?.username}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-white text-sm font-medium">
                        {userData?.discord?.username}
                      </span>
                    </div>
                    <Tooltip content="¡Consigue mas interactuando en discord!">
                      <div className="flex items-center gap-1 bg-zinc-800/80 rounded-full px-2 py-0.5">
                        <img
                          src={'icons/coin.png'}
                          alt="coin"
                          className="w-3.5 h-3.5"
                        />
                        <span className="text-white text-xs font-medium">
                          {userData?.user?.coins || 0}
                        </span>
                      </div>
                    </Tooltip>
                  </>
                )}
              </div>
            )}

            {updateDownloaded && (
              <>
                <Divider orientation="vertical" className="bg-zinc-800 h-6" />
                <button
                  onClick={handleUpdateClick}
                  style={{ zIndex: 9999 }}
                  className="p-1 hover:bg-zinc-800 rounded webkit-app-region-no-drag"
                >
                  <Icon
                    icon="gravity-ui:arrow-down-to-line"
                    className="pointer-events-none text-[#17c964]"
                    width="26"
                    height="26"
                    style={{
                      color: '#17c964',
                      filter: 'drop-shadow(0 0 2px #17c964)',
                    }}
                  />
                </button>
              </>
            )}

            <Divider orientation="vertical" className="bg-zinc-800 h-6" />

            {/* Window Controls */}
            <div className="flex flex-row items-center gap-1">
              <button
                onClick={handleWindowControl('minimize')}
                style={{ zIndex: 9999 }}
                className="p-1 hover:bg-zinc-800 rounded webkit-app-region-no-drag"
              >
                <Icon
                  icon="gravity-ui:minus"
                  className="pointer-events-none text-white"
                  width="26"
                  height="26"
                />
              </button>
              <button
                onClick={handleWindowControl('maximize')}
                style={{ zIndex: 9999 }}
                className="p-1 hover:bg-zinc-800 rounded webkit-app-region-no-drag"
              >
                <Icon
                  icon={isMaximized ? 'gravity-ui:copy' : 'gravity-ui:square'}
                  className="pointer-events-none text-white"
                  width="26"
                  height="26"
                />
              </button>
              <button
                onClick={handleWindowControl('close')}
                style={{ zIndex: 9999 }}
                className="p-1 hover:bg-zinc-800 rounded webkit-app-region-no-drag"
              >
                <Icon
                  icon="gravity-ui:xmark"
                  className="pointer-events-none text-white"
                  width="26"
                  height="26"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
