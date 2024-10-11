import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {Info} from "lucide-react"

export default function ContactMe({open, setOpen}) {

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-[#2C2C36] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <Info className='text-white size-6 p-0' />
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-white">
                    Contattami
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-400">
                    Se hai un progetto in mente, sarò lieto di valutarlo.
                    Per discutere i dettagli e ricevere un preventivo, contattami all'indirizzo:
                    <b> info@simonetignino.it </b><br></br>
                    Valuterò attentamente la tua richiesta e ti risponderò entro 48 ore lavorative.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1F1F2A] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-[#f6c443] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-ambra-700 sm:ml-3 sm:w-auto"
              >
                Chiudi
              </button>
             
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
