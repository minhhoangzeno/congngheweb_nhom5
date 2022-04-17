import { Form, InputGroup } from '@themesberg/react-bootstrap';
import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { statusByAdminAttendanceThunk } from '../../redux/attendanceSlice';

export default ({ show, handleClose, attendanceUser, search }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  let { addToast } = useToasts();
  let dispatch = useDispatch();
  const submitStatus = async (form) => {
    const data = {
      attendance: attendanceUser?.attendance,
      user: attendanceUser?.user?._id,
      status: form?.status
    }
    let resp = await dispatch(statusByAdminAttendanceThunk(data));
    if (resp) {
      addToast("Success", { appearance: 'success', autoDismiss: 1000 })
      search()
      handleClose()
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Thay đổi trạng thái điểm danh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Trạng thái</Form.Label>
            <Controller
              control={control}
              name="status"
              render={({
                field: { onChange, onBlur, value }
              }) => (
                <InputGroup style={{ border: errors.title?.type === "required" && '1px solid red' }}>
                  <Form.Control autoFocus required type="text" onChange={e => onChange(e.target.value)}
                    onBlur={onBlur}
                    value={value}
                  />
                </InputGroup>
              )}
              rules={{
                required: true
              }}
              defaultValue={attendanceUser?.status}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            handleClose();
          }}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSubmit(submitStatus)} style={{ marginLeft: 10 }} >
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}