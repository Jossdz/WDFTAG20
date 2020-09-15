import React, { useState } from "react"
import { Modal, Button } from "antd"

const Modals = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button onClick={() => setVisible(true)}>Open modal</Button>
      <Modal
        title='Alo'
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>Hola ke pets</p>
      </Modal>
    </div>
  )
}

export default Modals
