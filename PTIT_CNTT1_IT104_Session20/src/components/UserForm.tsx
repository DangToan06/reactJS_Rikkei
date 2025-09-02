import React, { useReducer } from "react";

interface UserState {
  name: string;
  email: string;
}

type UserAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "RESET_FORM" };

const initialState: UserState = {
  name: "",
  email: "",
};

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

export default function UserForm() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tên: ${state.name}\nEmail: ${state.email}`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                User Information Form
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Tên:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={state.name}
                    onChange={handleNameChange}
                    className="form-control"
                    placeholder="Nhập tên của bạn"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleEmailChange}
                    className="form-control"
                    placeholder="Nhập email của bạn"
                  />
                </div>

                <div className="alert alert-primary border-start border-primary border-4">
                  <h5 className="alert-heading mb-3">Thông tin người dùng:</h5>
                  <div className="mb-2">
                    <strong className="text-primary">Tên:</strong>{" "}
                    <span className="text-muted">
                      {state.name || "(Chưa nhập)"}
                    </span>
                  </div>
                  <div>
                    <strong className="text-primary">Email:</strong>{" "}
                    <span className="text-muted">
                      {state.email || "(Chưa nhập)"}
                    </span>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Gửi thông tin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
