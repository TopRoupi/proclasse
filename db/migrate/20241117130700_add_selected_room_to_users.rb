class AddSelectedRoomToUsers < ActiveRecord::Migration[8.0]
  def change
    # add_reference :users, :rooms, index: true, foreign_key: true, null: true, as: :selected_room_id

    add_column :users, :selected_room_id, :uuid, null: true
    add_foreign_key :users, :rooms, column: :selected_room_id
  end
end
