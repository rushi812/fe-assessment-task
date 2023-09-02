import { Dialog, DialogProps, Transition } from "@headlessui/react";
import { Fragment } from "react";

import CreateJob from "@/views/Forms/CreateJob/CreateJob";

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="relative transform overflow-hidden w-full max-w-[577px] rounded-[10px] bg-cardColor text-left shadow-sm transition-all border border-cardBorder">
              <CreateJob />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

type ModalProps = DialogProps<"div"> & {
  open: boolean;
  onClose: React.MouseEventHandler<any>;
};

export default Modal;
