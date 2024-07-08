'use client';

import React, { type ElementRef, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function ModalPage({
  children,
}: {
  children: React.ReactNode | ((onClose: () => void, router: AppRouterInstance) => React.ReactNode);
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  const { isOpen, onClose } = useDisclosure({ isOpen: true });

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    onClose();
    router.back();
  }

  return createPortal(
    <Modal size='full' isOpen={isOpen} onClose={onDismiss} className='-z-[1]'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              {typeof children === 'function' ? children(onClose, router) : children}
            </ModalBody>
            <ModalFooter>
              <button
                className='rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                onClick={onDismiss}
              >
                返回
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>,
    document.getElementById('modal-root')!
  );
}
