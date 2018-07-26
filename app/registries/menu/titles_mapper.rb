# module Menu
#   class TitlesMapper
#     def self.get_resource_caption(resource)
#       items = Menu::Manager.get_menu_items
#       menu_title = items.map do |submenu|
#         submenu.children.find {
#           |item| item.name == resource
#         }&.caption
#       end.compact.first
#       menu_title ? menu_title : resource.to_s.pluralize.titleize
#     end
#   end
# end
