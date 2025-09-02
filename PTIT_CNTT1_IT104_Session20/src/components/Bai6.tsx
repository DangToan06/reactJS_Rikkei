import React, { useEffect, useRef, useState } from "react";

export default function Bai6() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [open]);

  return (
    <div>
      <h1>Ứng dụng React vơi Modal va Focus Input</h1>
      <button className="btn btn-primary" onClick={() => setOpen(true)}>
        Open Modal
      </button>

      {open && (
        <div className="modal d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Đăng Nhập</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Nhập tên người dùng"
                  ref={inputRef}
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
